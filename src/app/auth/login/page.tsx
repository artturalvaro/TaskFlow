"use client";

// UI/UX
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// Others

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
  password: z.string().min(6, {
    message: "A senha deve ter no mínimo 6 caracteres.",
  }),
  email: z.string().min(1, { message: "Preencha o e-mail." }).email({ message: "Informe um e-mail válido." }),
})

export default function Login() {
    const [errorVisible, setErrorVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const formLogin = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    function handleLogin(values: z.infer<typeof formSchema>) {
        console.log(values);
    }

    return (
        <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
            <div className="flex w-full max-w-sm flex-col gap-6">
                <div className={cn("flex flex-col gap-6")}>
                    <Card>
                        <CardHeader className="text-center">
                        <CardTitle className="text-xl">Bem-vindo de volta</CardTitle>
                        <CardDescription>
                            Faça login com sua conta do Google
                        </CardDescription>
                        </CardHeader>
                        <CardContent>
                        <Form {...formLogin}>
                            <form onSubmit={formLogin.handleSubmit(handleLogin)} className="space-y-8">
                                <div className="flex flex-col gap-4">
                                    <Button variant="outline" className="w-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 mr-2">
                                        <path
                                            d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                                            fill="currentColor"
                                        />
                                        </svg>
                                        Google
                                    </Button>
                                </div>
                                <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                                    <span className="bg-card text-muted-foreground relative z-10 px-2">Ou continue com</span>
                                </div>
                                <FormField
                                    control={formLogin.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                            placeholder="example@taskflow.com"
                                            type="email"
                                            {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={formLogin.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                        <div className="flex items-center justify-between">
                                            <FormLabel>Password</FormLabel>
                                            <a href="#" className="text-sm underline-offset-4 hover:underline">
                                            Esqueceu sua senha?
                                            </a>
                                        </div>
                                        <FormControl>
                                            <Input type="password" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                {errorVisible && (
                                    <div className="text-sm text-red-500">
                                        {errorMessage}
                                    </div>
                                )}
                                <Button type="submit" className="w-full">
                                    Entrar
                                </Button>
                                <div className="text-center text-sm">
                                    Não tem uma conta?{" "}
                                    <a href="/auth/register" className="underline underline-offset-4">
                                        Inscreva-se
                                    </a>
                                </div>
                            </form>
                        </Form>
                        </CardContent>
                    </Card>
                    </div>
            </div>
        </div>
    )
}