import { describe, it, expect } from "vitest";
import { Orchestrator } from "./orchestrator";

describe("Orchestrator", () => {
  it("should say hello when started", () => {
    const orchestrator = new Orchestrator();
    const message = orchestrator.run();

    expect(message).toBe("Hello, here I am.");
  });
});
