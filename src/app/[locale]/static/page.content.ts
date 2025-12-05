import { type Dictionary, t } from "intlayer";

const pageContent = {
	key: "static",
	content: {
		getStarted: {
			main: t({
				en: "Get started by editing",
				fr: "Commencez par éditer",
				es: "Comience por editar",
			}),
			pageLink: "src/app/static/page.tsx",
		},
	},
} satisfies Dictionary;

export default pageContent;
