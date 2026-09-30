"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Description, FieldError, Input, Label, Separator, TextField } from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
    const onSubmit = async(e)=>{
        e.preventDefault();

        const formData = await new FormData(e.currentTarget);
        const user = await Object.fromEntries(formData.entries());
        // console.log(user);
        const {data, error} = await authClient.signIn.email({
          email: user.email,
          password: user.password,
        //   callbackURL: "/",
        });
        console.log({data, error});
        if(data){
          redirect('/')
        }
        if(error){
          // toast
          alert("Error")
        }
    };
    const handleGoogleRegister = async()=>{
        await authClient.signIn.social({
    provider: "google",
  });
};
    return (
        <div
            className="relative min-h-screen bg-cover bg-center"
            style={{
                backgroundImage: "url('/assets/car21.jpg')",
            }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/55" />

            {/* Content */}
            <div className="relative z-10 mt-20 flex min-h-screen items-center justify-end px-6 py-10 lg:px-20">

    <div className="flex w-full mx-auto max-w-5xl items-center">
    
    {/* Left Content */}
    <div className="flex-1 text-left">

        <h1 className="text-4xl font-bold text-white">
            Login
        </h1>
    </div>

    {/* Right Form */}
    <div className="w-full max-w-md rounded-2xl border border-white/25 bg-white/10 p-7 backdrop-blur-md">
        <form onSubmit={onSubmit} className="space-y-5">

                

                <TextField   isRequired>
    <Label className="text-white">Email</Label>
    <Input
    name="email"
    type="email"
        placeholder="Enter your email"
        className="rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-white placeholder:text-white/50"
    />
    <FieldError />
</TextField>

<TextField
        isRequired
        minLength={8}
        
        
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return null;
        }}
      >
        <Label className="text-white">Password</Label>
        <Input name="password" type="password" placeholder="Enter your password" className="rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-white placeholder:text-white/50"/>
        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
        <FieldError />
      </TextField>

                

                <label className="flex items-start gap-2 text-xs text-white/60">
                    <input
                        type="checkbox"
                        className="mt-0.5 accent-[#C41E3A]"
                    />

                    <span>
                        I agree to the Terms & Conditions and Privacy Policy.
                    </span>
                </label>

                <Button 
                    type="submit"
                    className="w-full rounded-lg bg-[#C41E3A] py-2.5 text-sm font-semibold text-white transition hover:bg-[#a91831]"
                >
                    LOGIN
                </Button>

            </form>
        <div className="text-center mt-3 gap-3">
                    <Separator>
                        <div className="whitespace-nowrap">Or</div>
                    </Separator>
                    <Button onClick={handleGoogleRegister} className={'text-muted'} variant="light"><FcGoogle />Login with Google</Button>
                </div>
    </div>

</div>
</div>
        </div>
    );
};

export default LoginPage;