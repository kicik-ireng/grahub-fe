import React from 'react';
import styles from './table.module.css';

interface TableProps extends React.HTMLAttributes<HTMLTableElement> {}
export function Table({ children, className, ...props }: TableProps) {
  return (
    <div className={`${styles.tableWrapper} ${className || ''}`}>
      <table className={styles.table} {...props}>{children}</table>
    </div>
  );
}

interface TableHeaderProps extends React.HTMLAttributes<HTMLTableSectionElement> {}
export function TableHeader({ children, className, ...props }: TableHeaderProps) {
  return <thead className={`${styles.thead} ${className || ''}`} {...props}>{children}</thead>;
}

interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {}
export function TableBody({ children, className, ...props }: TableBodyProps) {
  return <tbody className={`${styles.tbody} ${className || ''}`} {...props}>{children}</tbody>;
}

interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {}
export function TableRow({ children, className, onClick, ...props }: TableRowProps) {
  return (
    <tr 
      className={`${styles.tr} ${onClick ? styles.clickable : ''} ${className || ''}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </tr>
  );
}

interface TableHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement> {}
export function TableHead({ children, className, ...props }: TableHeadProps) {
  return <th className={`${styles.th} ${className || ''}`} {...props}>{children}</th>;
}

interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {}
export function TableCell({ children, className, ...props }: TableCellProps) {
  return <td className={`${styles.td} ${className || ''}`} {...props}>{children}</td>;
}
