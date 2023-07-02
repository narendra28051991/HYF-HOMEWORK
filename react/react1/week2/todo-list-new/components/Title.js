import Head from "next/head";

const Title = (props) => {
    return ( 
        <Head>
            <title>{`TODO-LIST | ${ props.title }`}</title>
            <meta name="keywords" content="todos"></meta>
        </Head>
     );
}
 
export default Title;