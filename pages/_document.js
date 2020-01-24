import Document, { Head, Main, NextScript } from 'next/document';

export default class RootDocument extends Document {
	render() {
		return (
			<html lang="ko">
				<Head>
					<meta charSet="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
					<link rel="stylesheet" href="/fonts/fonts.css" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
