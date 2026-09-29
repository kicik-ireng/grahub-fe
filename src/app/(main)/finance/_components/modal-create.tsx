"use client";
import React, { useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createFinance } from "@/lib/api/finance-api";

export default function ModalCreate({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<any>({
    accountId: "",
    categoryId: "",
    amount: "",
    date: "",
    description: "",
    attachmentUrl: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await createFinance(formData);
      onClose();
    } catch (error) {
      console.error("Error creating data", error);
      alert("Terjadi kesalahan saat menyimpan data.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Tambah Finance" footer={
      <>
        <Button variant="outline" onClick={onClose} disabled={isSubmitting}>Batal</Button>
        <Button onClick={handleSubmit} isLoading={isSubmitting}>Simpan</Button>
      </>
    }>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Input label="accountId" placeholder="Masukkan accountId" required value={formData.accountId || ""} onChange={e => setFormData({...formData, accountId: e.target.value})} />
        <Input label="categoryId" placeholder="Masukkan categoryId" required value={formData.categoryId || ""} onChange={e => setFormData({...formData, categoryId: e.target.value})} />
        <Input label="amount" placeholder="Masukkan amount" required value={formData.amount || ""} onChange={e => setFormData({...formData, amount: e.target.value})} />
        <Input label="date" placeholder="Masukkan date" required value={formData.date || ""} onChange={e => setFormData({...formData, date: e.target.value})} />
        <Input label="description" placeholder="Masukkan description" required value={formData.description || ""} onChange={e => setFormData({...formData, description: e.target.value})} />
        <Input label="attachmentUrl" placeholder="Masukkan attachmentUrl" value={formData.attachmentUrl || ""} onChange={e => setFormData({...formData, attachmentUrl: e.target.value})} />
      </form>
    </Dialog>
  );
}
