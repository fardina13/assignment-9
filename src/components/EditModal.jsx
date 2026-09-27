"use client";

import {Button, FieldError, Input, Label, ListBox, Modal, Surface, TextArea, TextField, Select} from "@heroui/react";

export function EditModal({car}) {
    const onSubmit= async(e)=>{
        e.preventDefault();
        const formData =await new FormData(e.currentTarget);
        const updatedCar = await Object.fromEntries(formData.entries());
        console.log(car);

        const res = await fetch(`http://localhost:5000/car/${car._id}`, {
        method: "PATCH",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(updatedCar),
    });

    const data = await res.json();

    console.log(data);
};
    
  return (
    <Modal>
      <Button className={'rounded-l-full rounded-r-none bg-[#C41E3A] px-8 py-3 text-sm text-white'}>Edit</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Edit Car Info</Modal.Heading>
              
            </Modal.Header>
            <Modal.Body className="max-h-[70vh] overflow-y-auto p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="space-y-5">
                   <TextField name="carName" defaultValue={car.carName} isRequired>
  <Label>Car Name</Label>
  <Input />
  <FieldError />
</TextField>

{/* Brand */}
<TextField name="brand" defaultValue={car.brand} isRequired>
  <Label>Brand</Label>
  <Input />
  <FieldError />
</TextField>
                
                                    {/* Category */}
                                    <Select name="category" isRequired>
            <Label>Category</Label>

            <Select.Trigger>
                <Select.Value />
                <Select.Indicator />
            </Select.Trigger>

            <Select.Popover>
                <ListBox>
                    <ListBox.Item id="Sedan" textValue="Sedan">
                        Sedan
                        <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item id="SUV" textValue="SUV">
                        SUV
                        <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item id="Hatchback" textValue="Hatchback">
                        Hatchback
                        <ListBox.ItemIndicator />
                    </ListBox.Item>
<ListBox.Item id="Luxury" textValue="Luxury">
                        Luxury
                        <ListBox.ItemIndicator />
                    </ListBox.Item>
                </ListBox>
            </Select.Popover>
        </Select>
                
                                    {/* Price */}
<TextField name="price" type="number" defaultValue={car.price} isRequired>
  <Label>Price / Day (USD)</Label>
  <Input type="number" />
  <FieldError />
</TextField>

{/* Seats */}
<TextField name="seats" type="number" defaultValue={car.seats} isRequired>
  <Label>Seats</Label>
  <Input type="number" />
  <FieldError />
</TextField>
                
                                    {/* Fuel Type */}
                                    <Select name="fuelType"  isRequired>
            <Label>Fuel Type</Label>

            <Select.Trigger>
                <Select.Value />
                <Select.Indicator />
            </Select.Trigger>

            <Select.Popover>
                <ListBox>
                    <ListBox.Item id="Petrol" textValue="Petrol">
                        Petrol
                        <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item id="Diesel" textValue="Diesel">
                        Diesel
                        <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item id="Hybrid" textValue="Hybrid">
                        Hybrid
                        <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item id="Electric" textValue="Electric">
Electric
                        <ListBox.ItemIndicator />
                    </ListBox.Item>
                </ListBox>
            </Select.Popover>
        </Select>
                
                                    {/* Image URL */}
<TextField name="imageUrl" type="url" defaultValue={car.imageUrl} isRequired>
  <Label>Image URL</Label>
  <Input type="url" />
  <FieldError />
</TextField>

{/* Description */}
<TextField name="description" defaultValue={car.description} isRequired>
  <Label>Description</Label>
  <TextArea />
  <FieldError />
</TextField>
        <div className="flex justify-end">
            <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button slot="close" type="submit" className={'rounded-xl bg-[#C41E3A] text-white'}>Save Changes</Button>
            </div>         
                        </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};