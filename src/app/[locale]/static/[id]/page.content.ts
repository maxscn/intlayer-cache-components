import { type Dictionary, t } from "intlayer";

const pageContent = {
	key: "staticid",
	content: {
		getStarted: {
			main: t({
				en: "Get started by editing",
				fr: "Commencez par éditer",
				es: "Comience por editar",
			}),
			pageLink: "app/[locale]/static/[id]/page.tsx",
		},
	},
} satisfies Dictionary;

export default pageContent;
