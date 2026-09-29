"use client";
import React, { useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createVolunteers } from "@/lib/api/volunteers-api";

export default function ModalCreate({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<any>({
    residentId: "",
    skills: "",
    availability: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await createVolunteers(formData);
      onClose();
    } catch (error) {
      console.error("Error creating data", error);
      alert("Terjadi kesalahan saat menyimpan data.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Tambah Volunteers" footer={
      <>
        <Button variant="outline" onClick={onClose} disabled={isSubmitting}>Batal</Button>
        <Button onClick={handleSubmit} isLoading={isSubmitting}>Simpan</Button>
      </>
    }>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Input label="residentId" placeholder="Masukkan residentId" required value={formData.residentId || ""} onChange={e => setFormData({...formData, residentId: e.target.value})} />
        <Input label="skills" placeholder="Masukkan skills" required value={formData.skills || ""} onChange={e => setFormData({...formData, skills: e.target.value})} />
        <Input label="availability" placeholder="Masukkan availability" required value={formData.availability || ""} onChange={e => setFormData({...formData, availability: e.target.value})} />
      </form>
    </Dialog>
  );
}
