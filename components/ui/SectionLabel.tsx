interface Props {
  children: React.ReactNode;
}

export default function SectionLabel({ children }: Props) {
  return (
    <div className="sectionLabel font-barlow-condensed" style={{
      fontFamily: "var(--font-barlow-condensed)",
      fontSize: 11,
      letterSpacing: "6px",
      textTransform: "uppercase",
      color: "#C9A84C",
      display: "flex",
      alignItems: "center",
      gap: 14,
      marginBottom: 16,
    }}>
      <span style={{ width: 36, height: 1, background: "#C9A84C", display: "block", flexShrink: 0 }} />
      {children}
    </div>
  );
}
