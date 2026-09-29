"use client";
import React, { useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createResidents } from "@/lib/api/residents-api";

export default function ModalCreate({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<any>({
    nik: "",
    familyCardNumber: "",
    fullName: "",
    nickname: "",
    birthPlace: "",
    birthDate: "",
    occupation: "",
    education: "",
    nationality: "",
    phone: "",
    email: "",
    address: "",
    photo: "",
    moveInDate: "",
    moveOutDate: "",
    moveOutReason: "",
    notes: "",
    userId: "",
    rtId: "",
    rwId: "",
    kelurahanId: "",
    familyId: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await createResidents(formData);
      onClose();
    } catch (error) {
      console.error("Error creating data", error);
      alert("Terjadi kesalahan saat menyimpan data.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Tambah Residents" footer={
      <>
        <Button variant="outline" onClick={onClose} disabled={isSubmitting}>Batal</Button>
        <Button onClick={handleSubmit} isLoading={isSubmitting}>Simpan</Button>
      </>
    }>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Input label="nik" placeholder="Masukkan nik" required value={formData.nik || ""} onChange={e => setFormData({...formData, nik: e.target.value})} />
        <Input label="familyCardNumber" placeholder="Masukkan familyCardNumber" required value={formData.familyCardNumber || ""} onChange={e => setFormData({...formData, familyCardNumber: e.target.value})} />
        <Input label="fullName" placeholder="Masukkan fullName" required value={formData.fullName || ""} onChange={e => setFormData({...formData, fullName: e.target.value})} />
        <Input label="nickname" placeholder="Masukkan nickname" value={formData.nickname || ""} onChange={e => setFormData({...formData, nickname: e.target.value})} />
        <Input label="birthPlace" placeholder="Masukkan birthPlace" required value={formData.birthPlace || ""} onChange={e => setFormData({...formData, birthPlace: e.target.value})} />
        <Input label="birthDate" placeholder="Masukkan birthDate" required value={formData.birthDate || ""} onChange={e => setFormData({...formData, birthDate: e.target.value})} />
        <Input label="occupation" placeholder="Masukkan occupation" value={formData.occupation || ""} onChange={e => setFormData({...formData, occupation: e.target.value})} />
        <Input label="education" placeholder="Masukkan education" value={formData.education || ""} onChange={e => setFormData({...formData, education: e.target.value})} />
        <Input label="nationality" placeholder="Masukkan nationality" required value={formData.nationality || ""} onChange={e => setFormData({...formData, nationality: e.target.value})} />
        <Input label="phone" placeholder="Masukkan phone" value={formData.phone || ""} onChange={e => setFormData({...formData, phone: e.target.value})} />
        <Input label="email" placeholder="Masukkan email" value={formData.email || ""} onChange={e => setFormData({...formData, email: e.target.value})} />
        <Input label="address" placeholder="Masukkan address" required value={formData.address || ""} onChange={e => setFormData({...formData, address: e.target.value})} />
        <Input label="photo" placeholder="Masukkan photo" value={formData.photo || ""} onChange={e => setFormData({...formData, photo: e.target.value})} />
        <Input label="moveInDate" placeholder="Masukkan moveInDate" value={formData.moveInDate || ""} onChange={e => setFormData({...formData, moveInDate: e.target.value})} />
        <Input label="moveOutDate" placeholder="Masukkan moveOutDate" value={formData.moveOutDate || ""} onChange={e => setFormData({...formData, moveOutDate: e.target.value})} />
        <Input label="moveOutReason" placeholder="Masukkan moveOutReason" value={formData.moveOutReason || ""} onChange={e => setFormData({...formData, moveOutReason: e.target.value})} />
        <Input label="notes" placeholder="Masukkan notes" value={formData.notes || ""} onChange={e => setFormData({...formData, notes: e.target.value})} />
        <Input label="userId" placeholder="Masukkan userId" value={formData.userId || ""} onChange={e => setFormData({...formData, userId: e.target.value})} />
        <Input label="rtId" placeholder="Masukkan rtId" required value={formData.rtId || ""} onChange={e => setFormData({...formData, rtId: e.target.value})} />
        <Input label="rwId" placeholder="Masukkan rwId" required value={formData.rwId || ""} onChange={e => setFormData({...formData, rwId: e.target.value})} />
        <Input label="kelurahanId" placeholder="Masukkan kelurahanId" required value={formData.kelurahanId || ""} onChange={e => setFormData({...formData, kelurahanId: e.target.value})} />
        <Input label="familyId" placeholder="Masukkan familyId" value={formData.familyId || ""} onChange={e => setFormData({...formData, familyId: e.target.value})} />
      </form>
    </Dialog>
  );
}
