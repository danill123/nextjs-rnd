import { Grid } from "@mui/material";
import Image from "next/image";
import { Typography } from "@mui/material";

export async function getServerSideProps(context) {
  const res = await fetch(`https://fakestoreapi.com/products/${context?.query?.id}`);
  const data = await res.json();
 
  return { props: { data } }
}

export default function Product({ data }) {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
            <Image src={data?.image} width={1000} height={1000} style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
            <Typography variant="h3" align="left" component="h2">
                {data?.title}
            </Typography>
            <Typography variant="h4" align="left" component="h2">
                {data?.price?.toLocaleString()}
            </Typography>
            <div style={{ height: '50px' }}></div>
            <Typography variant="h5" align="left" component="h2">
                {data?.description}
            </Typography>
        </Grid>
      </Grid>
    </>
  )
}
