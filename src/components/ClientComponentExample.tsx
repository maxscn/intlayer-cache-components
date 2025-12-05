"use client";

import { t } from "next-intlayer";
import type { FC } from "react";

export const ClientComponentExample: FC = () => {
	return (
		<div>
			<h2>
				{t({
					en: "Client Component Example",
					fr: "Exemple de composant client",
					es: "Ejemplo de componente cliente",
				})}
			</h2>
			<p>
				{t({
					en: "This is a client component example",
					fr: "Ceci est un exemple de composant client",
					es: "Este es un ejemplo de componente cliente",
				})}
			</p>
		</div>
	);
};
