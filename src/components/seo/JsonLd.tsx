import type { JsonLdObject } from "@/lib/seo/schema";

export function JsonLd({ data, id }: { data: JsonLdObject; id?: string }) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
