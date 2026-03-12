'use client';

import { QRCodeCanvas } from 'qrcode.react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

interface QrCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
}

export default function QrCodeModal({ isOpen, onClose, url }: QrCodeModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Scan to Open WhatsApp</DialogTitle>
          <DialogDescription>
            Scan the QR code with your phone to open WhatsApp and send your message.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center p-4">
          <QRCodeCanvas value={url} size={256} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
