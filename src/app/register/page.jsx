"use client";

import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/lib/auth-client";
import { Button, Description, FieldError, Input, Label, Separator, TextField } from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";

const RegisterPage = () => {
    const onSubmit = async(e)=>{
        e.preventDefault();

        const formData = await new FormData(e.currentTarget);
        const user = await Object.fromEntries(formData.entries());
        // console.log(user);
        const {data, error} = await authClient.signUp.email({
          email: user.email,
          password: user.password,
          name: user.name,
          image: user.image,
        //   callbackURL: "/",
        });
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
    }
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
        <p className="mb-2 text-sm font-semibold tracking-[3px] text-[#C41E3A]">
            GET STARTED
        </p>

        <h1 className="text-4xl font-bold text-white">
            Create Your Account
        </h1>

        <p className="mt-3 max-w-md text-white/65">
            Register now and start your premium driving experience.
        </p>
    </div>

    {/* Right Form */}
    <div className="w-full max-w-md rounded-2xl border border-white/25 bg-white/10 p-7 backdrop-blur-md">
        <form onSubmit={onSubmit} className="space-y-5">

                <TextField   isRequired>
    <Label className="text-white">Name</Label>
    <Input
    name="name"
    type="text"
        placeholder="Enter your full name"
        className="rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-white placeholder:text-white/50"
    />
    <FieldError />
</TextField>

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

                <TextField
        
        type="url"
      >
        <Label className="text-white">Image URL</Label>
        <Input name="image" type="url" placeholder="Image url" className="w-full rounded-lg border border-white/25 bg-white/10 px-4 py-2.5 text-sm text-white outline-none placeholder:text-white/35 focus:border-[#C41E3A]"/>
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
                    REGISTER
                </Button>

            </form>
        <div className=" text-center gap-3 mt-3">
            <Separator>
                <div className="whitespace-nowrap text-white">
                    Or
                </div>
            </Separator>
            <Button onClick={handleGoogleRegister} variant="light" className={'text-muted mt-2'}><FcGoogle />Sign up with Google</Button>
        </div>
    </div>
    

</div>
</div>
        </div>
    );
};

export default RegisterPage;