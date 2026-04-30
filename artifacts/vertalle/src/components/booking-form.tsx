import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useCreateBooking, BookingRequestConcernType, type BookingRequest } from "@workspace/api-client-react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const bookingSchema = z.object({
  name: z
    .string()
    .min(2, "Informe seu nome")
    .max(120, "Nome muito longo"),
  phone: z
    .string()
    .min(8, "Informe um telefone válido")
    .max(30, "Telefone muito longo"),
  concernType: z.enum(["coluna", "pilates", "idoso", "outro"], {
    required_error: "Escolha uma opção",
  }),
  message: z.string().max(1000).optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

const CONCERN_OPTIONS: { value: BookingRequest["concernType"]; label: string }[] = [
  { value: "coluna", label: "Dor / problema na coluna" },
  { value: "pilates", label: "Pilates (saúde e bem-estar)" },
  { value: "idoso", label: "Cuidados com a pessoa idosa" },
  { value: "outro", label: "Outro assunto" },
];

export function BookingForm() {
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      phone: "",
      concernType: undefined as unknown as BookingFormValues["concernType"],
      message: "",
    },
  });

  const mutation = useCreateBooking({
    mutation: {
      onSuccess: () => {
        toast.success("Pedido enviado!", {
          description: "A Giselle entrará em contato em breve. Obrigada!",
        });
        form.reset();
      },
      onError: (err) => {
        const message =
          err && typeof err === "object" && "data" in err
            ? (err as { data?: { error?: string } }).data?.error
            : undefined;
        toast.error("Não foi possível enviar", {
          description: message ?? "Tente novamente em alguns instantes ou fale conosco no WhatsApp.",
        });
      },
    },
  });

  const onSubmit = (values: BookingFormValues) => {
    mutation.mutate({
      data: {
        name: values.name.trim(),
        phone: values.phone.trim(),
        concernType: values.concernType as BookingRequestConcernType,
        message: values.message?.trim() || undefined,
      },
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-background rounded-[2rem] p-8 lg:p-12 shadow-xl border border-border space-y-6"
        noValidate
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-medium text-foreground">Nome completo</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  autoComplete="name"
                  placeholder="Como podemos te chamar?"
                  className="h-12 text-base bg-background"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-medium text-foreground">Telefone (WhatsApp)</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="(31) 9 0000-0000"
                  className="h-12 text-base bg-background"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="concernType"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-medium text-foreground">Como podemos te ajudar?</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className="h-12 text-base bg-background">
                    <SelectValue placeholder="Escolha uma opção" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {CONCERN_OPTIONS.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value} className="text-base py-3">
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-medium text-foreground">
                Conte um pouco mais <span className="text-muted-foreground font-normal">(opcional)</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  rows={4}
                  placeholder="Há quanto tempo sente dor, melhor horário para retorno, etc."
                  className="text-base bg-background resize-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={mutation.isPending}
          className="w-full h-14 rounded-full bg-primary text-primary-foreground text-lg font-medium hover:bg-primary/90 shadow-md transition-all disabled:opacity-70"
        >
          {mutation.isPending ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Enviando...
            </>
          ) : mutation.isSuccess ? (
            <>
              <CheckCircle2 className="w-5 h-5 mr-2" />
              Pedido enviado
            </>
          ) : (
            <>
              Enviar pedido de avaliação
              <ArrowRight className="w-5 h-5 ml-2" />
            </>
          )}
        </Button>

        <p className="text-sm text-muted-foreground text-center leading-relaxed">
          Ao enviar, suas informações chegam diretamente no e-mail da Giselle.
          Retornamos em até 1 dia útil.
        </p>
      </form>
    </Form>
  );
}
