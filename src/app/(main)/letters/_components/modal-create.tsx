"use client";
import React, { useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createLetters } from "@/lib/api/letters-api";

export default function ModalCreate({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<any>({
    number: "",
    letterTypeId: "",
    templateId: "",
    requesterId: "",
    dynamicData: "",
    qrCodeUrl: "",
    verificationCode: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await createLetters(formData);
      onClose();
    } catch (error) {
      console.error("Error creating data", error);
      alert("Terjadi kesalahan saat menyimpan data.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Tambah Letters" footer={
      <>
        <Button variant="outline" onClick={onClose} disabled={isSubmitting}>Batal</Button>
        <Button onClick={handleSubmit} isLoading={isSubmitting}>Simpan</Button>
      </>
    }>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Input label="number" placeholder="Masukkan number" value={formData.number || ""} onChange={e => setFormData({...formData, number: e.target.value})} />
        <Input label="letterTypeId" placeholder="Masukkan letterTypeId" required value={formData.letterTypeId || ""} onChange={e => setFormData({...formData, letterTypeId: e.target.value})} />
        <Input label="templateId" placeholder="Masukkan templateId" value={formData.templateId || ""} onChange={e => setFormData({...formData, templateId: e.target.value})} />
        <Input label="requesterId" placeholder="Masukkan requesterId" required value={formData.requesterId || ""} onChange={e => setFormData({...formData, requesterId: e.target.value})} />
        <Input label="dynamicData" placeholder="Masukkan dynamicData" value={formData.dynamicData || ""} onChange={e => setFormData({...formData, dynamicData: e.target.value})} />
        <Input label="qrCodeUrl" placeholder="Masukkan qrCodeUrl" value={formData.qrCodeUrl || ""} onChange={e => setFormData({...formData, qrCodeUrl: e.target.value})} />
        <Input label="verificationCode" placeholder="Masukkan verificationCode" value={formData.verificationCode || ""} onChange={e => setFormData({...formData, verificationCode: e.target.value})} />
      </form>
    </Dialog>
  );
}
