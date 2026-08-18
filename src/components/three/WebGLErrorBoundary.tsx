import { Component, type ErrorInfo, type ReactNode } from "react";
import { WebGLFallback } from "./WebGLFallback";

export class WebGLErrorBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch(error: Error, info: ErrorInfo) {
    if (import.meta.env.DEV)
      console.warn(
        "WebGL scene unavailable; using static fallback.",
        error,
        info.componentStack,
      );
  }
  render() {
    return this.state.failed ? <WebGLFallback /> : this.props.children;
  }
}
