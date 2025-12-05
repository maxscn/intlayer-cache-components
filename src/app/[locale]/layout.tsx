import { getHTMLTextDir } from "intlayer";
import { Inter } from "next/font/google";
import { IntlayerClientProvider, type NextLayoutIntlayer } from "next-intlayer";

export { generateStaticParams } from "next-intlayer"; // Line to insert

const inter = Inter({ subsets: ["latin"] });

const LocaleLayout: NextLayoutIntlayer = async ({ children, params }) => {
	const { locale } = await params;
	return (
		<html lang={locale} dir={getHTMLTextDir(locale)}>
			<body className={inter.className}>
				<IntlayerClientProvider locale={locale}>
					{children}
				</IntlayerClientProvider>
			</body>
		</html>
	);
};

export default LocaleLayout;
