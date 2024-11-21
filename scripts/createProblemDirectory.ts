import { existsSync } from "https://deno.land/std@0.106.0/fs/mod.ts";
import { ensureDirSync } from "https://deno.land/std@0.106.0/fs/mod.ts";
import { join } from "https://deno.land/std@0.106.0/path/mod.ts";

function createProblemDirectory(problemName: string) {
  const baseDir = join(Deno.cwd(), "src", "algorithms", problemName);
  if (!existsSync(baseDir)) {
    ensureDirSync(baseDir);
  }

  const files = ["main.ts", "main_test.ts", "main_bench.ts"];
  files.forEach((file) => {
    const filePath = join(baseDir, file);
    if (!existsSync(filePath)) {
      let content = "";
      if (file === "main.ts") {
        content += `/**
 * Description:
 *
 * @param {number} n Param Description:
 * @returns {number} Return Description:
 *
 * @example
 * // Example 1:
 * // Input:
 * // Output:
 * // Explanation:
 *
 * @example
 * // Example 2:
 * // Input:
 * // Output:
 * // Explanation:
 *
 * @see https://
 */
export const ${problemName.replace(/-/g, "_")} = () => {};\n`;
      } else if (file === "main_test.ts") {
        content += `import { assertEquals } from "jsr:@std/assert";\n`;
        content += `import { ${problemName.replace(
          /-/g,
          "_"
        )} } from "./main.ts";\n\n`;
        content += `Deno.test("${problemName.replace(
          /-/g,
          "_"
        )} returns correct result", () => {\n`;
        content += `    assertEquals(${problemName.replace(
          /-/g,
          "_"
        )}(), 'expected result');\n`;
        content += `});\n`;
      } else if (file === "main_bench.ts") {
        content += `import { ${problemName.replace(
          /-/g,
          "_"
        )} } from "./main.ts";\n`;
        content += `Deno.bench("${problemName.replace(/-/g, "_")}", () => {\n`;
        content += `    ${problemName.replace(/-/g, "_")}();\n`;
        content += `});\n`;
      }
      Deno.writeTextFileSync(filePath, content);
    }
  });

  console.log(
    `Directory structure for problem "${problemName}" created successfully.`
  );
}

// Get the problem name from command line arguments
const problemName = Deno.args[0];
if (!problemName) {
  console.error("Please provide a problem name.");
  Deno.exit(1);
}

createProblemDirectory(problemName);
