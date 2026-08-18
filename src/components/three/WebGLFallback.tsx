export function WebGLFallback() {
  return (
    <div className="webgl-fallback" data-testid="webgl-fallback">
      <div className="fallback-sun" />
      <div className="panel-grid">
        {Array.from({ length: 18 }, (_, index) => (
          <i key={index} />
        ))}
      </div>
    </div>
  );
}
