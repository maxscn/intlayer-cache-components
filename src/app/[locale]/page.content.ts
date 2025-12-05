import { type Dictionary, t } from "intlayer";

const pageContent = {
	key: "page",
	content: {
		getStarted: {
			main: t({
				en: "Get started by editing",
				fr: "Commencez par éditer",
				es: "Comience por editar",
			}),
			pageLink: "src/app/[locale]/page.tsx",
		},
	},
} satisfies Dictionary;

export default pageContent;
