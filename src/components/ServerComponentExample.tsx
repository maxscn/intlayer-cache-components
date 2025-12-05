import { t } from "next-intlayer/server";
import type { FC } from "react";

export const ServerComponentExample: FC = () => {
	return (
		<div>
			<h2>
				{t({
					en: "Server Component Example",
					fr: "Exemple de composant serveur",
					es: "Ejemplo de componente servidor",
				})}
			</h2>
			<p>
				{t({
					en: "This is a server component example",
					fr: "Ceci est un exemple de composant serveur",
					es: "Este es un ejemplo de componente servidor",
				})}
			</p>
		</div>
	);
};
