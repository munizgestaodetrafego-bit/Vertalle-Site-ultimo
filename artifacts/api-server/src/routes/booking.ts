import { Router, type IRouter } from "express";
import { CreateBookingBody, CreateBookingResponse } from "@workspace/api-zod";

const router: IRouter = Router();

const DESTINATION_EMAIL = "clinicavertalle@gmail.com";
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${DESTINATION_EMAIL}`;

const CONCERN_LABELS: Record<string, string> = {
  coluna: "Dor / problema na coluna",
  pilates: "Pilates (saúde e bem-estar)",
  idoso: "Cuidados com a pessoa idosa",
  outro: "Outro assunto",
};

router.post("/booking", async (req, res) => {
  const parsed = CreateBookingBody.safeParse(req.body);
  if (!parsed.success) {
    req.log.warn({ issues: parsed.error.issues }, "Invalid booking payload");
    return res.status(400).json({ error: "Dados inválidos. Verifique os campos e tente novamente." });
  }

  const { name, phone, concernType, message } = parsed.data;
  const concernLabel = CONCERN_LABELS[concernType] ?? concernType;

  const payload = {
    _subject: `Nova reserva de avaliação — ${name}`,
    _template: "table",
    _captcha: "false",
    Nome: name,
    Telefone: phone,
    Interesse: concernLabel,
    Mensagem: message?.trim() ? message : "(sem detalhes adicionais)",
    Origem: "Site Vertalle",
  };

  try {
    const upstream = await fetch(FORMSUBMIT_ENDPOINT, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!upstream.ok) {
      const text = await upstream.text().catch(() => "");
      req.log.error({ status: upstream.status, text }, "FormSubmit upstream error");
      return res.status(502).json({ error: "Não foi possível enviar o pedido agora. Tente novamente em instantes." });
    }

    const data = CreateBookingResponse.parse({ ok: true });
    return res.json(data);
  } catch (err) {
    req.log.error({ err }, "Failed to forward booking request");
    return res.status(502).json({ error: "Não foi possível enviar o pedido agora. Tente novamente em instantes." });
  }
});

export default router;
