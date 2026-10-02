"use client";

import {
    Button,
    FieldError,
    Input,
    Label,
    ListBox,
    Select,
    TextArea,
    TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { useEffect } from "react";


const AddCar = ({ isPending }) => {
    const onSubmit= async(e)=>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const car = Object.fromEntries(formData.entries());
        console.log(car);

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/car`,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(car)
        })
        const data = await res.json();
        console.log(data);
    }
      const { data: session, isPending: authPending } = authClient.useSession();
  const router = useRouter();

  useEffect(() => {
    if (!authPending && !session) {
      router.push("/login");
    }
  }, [session, authPending, router]);

  if (authPending || !session) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

    return (
        <form onSubmit={onSubmit}
            className="relative min-h-screen overflow-hidden px-4 py-28"
            style={{
                backgroundImage:
                    "url('/assets/car16.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
            }}
        >

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/55" />
            
            <div className="relative z-10 mb-4 text-center">
              <h2 className="text-5xl font-semibold text-white">Add Car</h2>
              <p className="mt-1 text-sm text-white/70">Make changes to the car details below</p>
            </div>

            {/* Form Card */}
            <div className="relative z-10 mx-auto w-full max-w-xl rounded-2xl border border-white/30 bg-white/20 p-8 shadow-2xl backdrop-blur-md">

                <div className="space-y-5">

                    {/* Car Name */}
                    <TextField name="carName" isRequired>
                        <Label className="text-white">
                            Car Name
                        </Label>

                        <Input
                            placeholder="Toyota Camry"
                            className="rounded-xl border border-white/30 bg-white/10 text-white placeholder:text-white/50"
                        />

                        <FieldError />
                    </TextField>

                    {/* Brand */}
                    <TextField name="brand" isRequired>
                        <Label className="text-white">
                            Brand
                        </Label>

                        <Input
                            placeholder="Toyota"
                            className="rounded-xl border border-white/30 bg-white/10 text-white placeholder:text-white/50"
                        />

                        <FieldError />
                    </TextField>

                    {/* Category */}
                    <Select
                        name="category"
                        isRequired
                        className="w-full"
                        placeholder="Select category"
                    >
                        <Label className="text-white">
                            Category
                        </Label>

                        <Select.Trigger className="rounded-xl border border-white/30 bg-white/10 text-white">
                            <Select.Value />
                            <Select.Indicator />
                        </Select.Trigger>

                        <Select.Popover>
                            <ListBox>
                                <ListBox.Item
                                    id="Sedan"
                                    textValue="Sedan"
                                >
                                    Sedan
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>

                                <ListBox.Item
                                    id="SUV"
                                    textValue="SUV"
                                >
                                    SUV
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>

                                <ListBox.Item
                                    id="Hatchback"
                                    textValue="Hatchback"
                                >
                                    Hatchback
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>

                                <ListBox.Item
                                    id="Luxury"
                                    textValue="Luxury"
                                >
                                    Luxury
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                            </ListBox>
                        </Select.Popover>
                    </Select>

                    {/* Price */}
                    <TextField
                        name="price"
                        type="number"
                        isRequired
                    >
                        <Label className="text-white">
                            Price / Day (USD)
                        </Label>

                        <Input
                            type="number"
                            placeholder="80"
                            className="rounded-xl border border-white/30 bg-white/10 text-white placeholder:text-white/50"
                        />

                        <FieldError />
                    </TextField>

                    {/* Seats */}
                    <TextField
                        name="seats"
                        type="number"
                        isRequired
                    >
                        <Label className="text-white">
                            Seats
                        </Label>

                        <Input
                            type="number"
                            placeholder="5"
                            className="rounded-xl border border-white/30 bg-white/10 text-white placeholder:text-white/50"
                        />

                        <FieldError />
                    </TextField>

                    {/* Fuel Type */}
                    <Select
                        name="fuelType"
                        isRequired
                        className="w-full"
                        placeholder="Select fuel type"
                    >
                        <Label className="text-white">
                            Fuel Type
                        </Label>

                        <Select.Trigger className="rounded-xl border border-white/30 bg-white/10 text-white">
                            <Select.Value />
                            <Select.Indicator />
                        </Select.Trigger>

                        <Select.Popover>
                            <ListBox>
                                <ListBox.Item
                                    id="Petrol"
                                    textValue="Petrol"
                                >
                                    Petrol
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>

                                <ListBox.Item
                                    id="Diesel"
                                    textValue="Diesel"
                                >
                                    Diesel
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>

                                <ListBox.Item
                                    id="Hybrid"
                                    textValue="Hybrid"
                                >
                                    Hybrid
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>

                                <ListBox.Item
                                    id="Electric"
                                    textValue="Electric"
                                >
                                    Electric
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                            </ListBox>
                        </Select.Popover>
                    </Select>

                    {/* Image URL */}
                    <TextField
                        name="imageUrl"
                        type="url"
                        isRequired
                    >
                        <Label className="text-white">
                            Image URL
                        </Label>

                        <Input
                            type="url"
                            placeholder="https://example.com/car.jpg"
                            className="rounded-xl border border-white/30 bg-white/10 text-white placeholder:text-white/50"
                        />

                        <FieldError />
                    </TextField>

                    {/* Description */}
                    <TextField name="description" isRequired>
                        <Label className="text-white">
                            Description
                        </Label>

                        <TextArea
                            placeholder="Describe the car..."
                            className="rounded-xl border border-white/30 bg-white/10 text-white placeholder:text-white/50"
                        />

                        <FieldError />
                    </TextField>

                    {/* Button */}
                    <Button
                    
                        type="submit"
                        isLoading={isPending}
                        className="w-full rounded-xl bg-[#C41E3A] text-white hover:bg-[#a91932]"
                    >
                        {isPending
                            ? "Updating Car..."
                            : "Save Changes"}
                    </Button>

                </div>
            </div>
        </form>
    );
};

export default AddCar;