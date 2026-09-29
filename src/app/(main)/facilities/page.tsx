import React from "react";
import DataTable from "./_components/data-table";

export default function FacilitiesPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <header>
        <h1 className="text-page-title">Facilities</h1>
        <p className="text-description">Kelola data facilities Anda di sini.</p>
      </header>
      <div style={{ backgroundColor: "var(--color-surface)", padding: "1.5rem", borderRadius: "var(--radius-lg)", border: "1px solid var(--color-border)" }}>
        <DataTable />
      </div>
    </div>
  );
}
