import Head from 'next/head'
import dynamic from 'next/dynamic';
const CardProduct = dynamic(() => import("@/components/CardProduct"));
import { Grid } from "@mui/material";

export async function getServerSideProps() {
  const res = await fetch(`https://fakestoreapi.com/products?limit=14`);
  const data = await res.json();
 
  // Pass data to the page via props
  return { props: { data } }
}

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Homepage ecommerce" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid container spacing={2}>
        {props?.data?.map( item =>   
          <Grid key={item?.id} item xs={12} sm={6} md={3}>
            <CardProduct imageSrc={item?.image} title={item?.title} />
          </Grid>
        )}
      </Grid>
    </>
  )
}
