import { NextSeo } from 'next-seo'
import Head from 'next/head'
import { AppConfig } from '../utils/AppConfig'

type IMetaProps = {
  title: string
  description: string
  canonical?: string
}

const Meta = ({ title, description, canonical }: IMetaProps) => (
  <>
    <Head>
      <meta charSet="UTF-8" key="charset" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1"
        key="viewport"
      />
      <link
        rel="preload"
        href="fonts/Baloo2-Regular.ttf"
        as="font"
        crossOrigin=""
      />
    </Head>

    <NextSeo
      title={title}
      description={description}
      canonical={canonical}
      openGraph={{
        title,
        description,
        url: canonical,
        locale: AppConfig.locale,
        site_name: AppConfig.site_name,
      }}
    />
  </>
)

export { Meta }
