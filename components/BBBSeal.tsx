export function BBBSeal({ className = '', height = 56 }: { className?: string; height?: number }) {
  return (
    <a
      href="https://www.bbb.org/ca/on/hamilton/profile/residential-roofing/eroof-inc-0107-1420341/#sealclick"
      target="_blank"
      rel="nofollow noopener noreferrer"
      className={className}
      aria-label="eRoof Inc BBB Business Review (opens in a new tab)"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://seal-mwco.bbb.org/seals/blue-seal-125-145-bbb-1420341.png"
        alt="eRoof Inc BBB Business Review"
        width={125}
        height={145}
        style={{ border: 0, height, width: 'auto' }}
        loading="lazy"
      />
    </a>
  )
}
