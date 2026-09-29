"use client";
import React, { useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createActivities } from "@/lib/api/activities-api";

export default function ModalCreate({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<any>({
    title: "",
    description: "",
    date: "",
    location: "",
    organizer: "",
    budget: "",
    scope: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await createActivities(formData);
      onClose();
    } catch (error) {
      console.error("Error creating data", error);
      alert("Terjadi kesalahan saat menyimpan data.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Tambah Activities" footer={
      <>
        <Button variant="outline" onClick={onClose} disabled={isSubmitting}>Batal</Button>
        <Button onClick={handleSubmit} isLoading={isSubmitting}>Simpan</Button>
      </>
    }>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Input label="title" placeholder="Masukkan title" required value={formData.title || ""} onChange={e => setFormData({...formData, title: e.target.value})} />
        <Input label="description" placeholder="Masukkan description" value={formData.description || ""} onChange={e => setFormData({...formData, description: e.target.value})} />
        <Input label="date" placeholder="Masukkan date" required value={formData.date || ""} onChange={e => setFormData({...formData, date: e.target.value})} />
        <Input label="location" placeholder="Masukkan location" required value={formData.location || ""} onChange={e => setFormData({...formData, location: e.target.value})} />
        <Input label="organizer" placeholder="Masukkan organizer" value={formData.organizer || ""} onChange={e => setFormData({...formData, organizer: e.target.value})} />
        <Input label="budget" placeholder="Masukkan budget" value={formData.budget || ""} onChange={e => setFormData({...formData, budget: e.target.value})} />
        <Input label="scope" placeholder="Masukkan scope" required value={formData.scope || ""} onChange={e => setFormData({...formData, scope: e.target.value})} />
      </form>
    </Dialog>
  );
}
