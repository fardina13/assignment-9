"use client";

import {AlertDialog, Button} from "@heroui/react";

export function BookingCancelAlert({ bookingId, onDelete }) {
  return (
    <AlertDialog>
      <Button variant="bordered" className={'self-start rounded-lg border border-red-200 px-4 py-2 text-sm font-semibold text-[#C41E3A] transition duration-200 hover:bg-[#C41E3A] hover:text-white md:self-center'} > Cancel </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete project permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button slot="close" className="bg-[#C41E3A] text-white hover:bg-[#a81830]" onPress={() => onDelete(bookingId)}>
                Cancel Booking
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
