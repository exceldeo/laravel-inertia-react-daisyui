import Card from "@/Components/card";
import { H2 } from "@/Components/typography";
import TextInput from "@/Components/textInput";
import Button from "@/Components/button";

export default function Login() {
    return (
        <div className="container mx-auto bg-gray-200 min-h-lvh py-20">
            <Card
                className="w-full sm:w-96 mx-auto"
                style={{ backdropFilter: "blur(20px)" }}
            >
                <form action="/login" method="POST" className="flex flex-col gap-2">
                    <div className="text-center">
                        <H2>Login</H2>
                    </div>
                    <TextInput
                        type="email"
                        name="email"
                        placeholder="name@gmail.com"
                        required
                        full
                        label="Email"
                    />
                    <TextInput
                        type="password"
                        name="password"
                        placeholder="••••••••"
                        required
                        full
                        label="Password"
                    />
                    <div className="mt-8 flex flex-col">
                        <Button type="submit" buttonType="primary">
                            Login with Email
                        </Button>
                    </div>
                </form>
            </Card>
        </div>
    );
}
