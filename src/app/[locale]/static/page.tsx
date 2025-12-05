import { ClientComponentExample } from "@components/ClientComponentExample";
import { ServerComponentExample } from "@components/ServerComponentExample";
import { IntlayerClientProvider, type NextPageIntlayer } from "next-intlayer";
import { IntlayerServerProvider, useIntlayer } from "next-intlayer/server";
import type { FC } from "react";

const PageContent: FC = () => {
	const content = useIntlayer("static");

	return (
		<>
			<p>{content.getStarted.main}</p>
			<code>{content.getStarted.pageLink}</code>
		</>
	);
};

const Page: NextPageIntlayer = async ({ params }) => {
	const { locale } = await params;

	return (
		<IntlayerServerProvider locale={locale}>
			<PageContent />
			<ServerComponentExample />
			<ClientComponentExample />
		</IntlayerServerProvider>
	);
};

export default Page;
