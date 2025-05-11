"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    phoneNumber: z.string().min(1, "Phone number is required"),
    messageTitle: z.string().min(1, "Message title is required"),
    messageSubject: z.string().min(1, "Message is required"),
})

const ContactUs = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            messageTitle: "",
            messageSubject: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true)
        // Here you would normally send the form data to your API
        console.log(values)

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        setIsSubmitting(false)
        form.reset()
    }

    return (
        <section className=" w-full px-4 md:px-12 lg:px-20 py-20 mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 items-start">
                <div className=" py-6">
                    <p className="text-lg mb-2">Get in touch with us</p>
                    <h2 className="text-4xl md:text-6xl font-semibold text-primary mb-2 md:mb-6">
                        Ready to Own a
                        Lifetime <br className=" hidden md:block" /> Companion? Talk to
                        Us
                    </h2>
                    <p className=" opacity-80 text-lg md:text-xl md:max-w-[48ch]">
                        Getting yourself a loyal companion is what we specialize in. Speak to us and
                        let&apos;s find you what suits you best.
                    </p>
                </div>

                <div className="bg-white p-6 md:p-8 shadow-sm">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormField
                                    control={form.control}
                                    name="firstName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>First Name*</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Alan" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="lastName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Last Name*</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Obeng" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email*</FormLabel>
                                            <FormControl>
                                                <Input placeholder="alanobeng123@line.com" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="phoneNumber"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Phone Number*</FormLabel>
                                            <FormControl>
                                                <Input placeholder="123 456 789 0" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <FormField
                                control={form.control}
                                name="messageTitle"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Message Title*</FormLabel>
                                        <FormControl>
                                            <Input placeholder="I want a dog" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="messageSubject"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Message Subject*</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="What is the price..."
                                                className="resize-none min-h-[200px]"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button
                                type="submit"
                                className="w-full bg-[#d57149] hover:bg-[#c05d38]"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Submitting..." : "Submit"}
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>
        </section>
    )
}

export default ContactUs