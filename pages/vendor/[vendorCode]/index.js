import {useRouter} from "next/router";
import Head from 'next/head'
import useSWR from "swr";
import VendorModel from "models/vendor";

export default function Vendor(props) {
    const router = useRouter();
    const {vendorCode} = router.query
    const vendor = new VendorModel(vendorCode)

    const initialData = props.data;
    const { data } = useSWR([],vendor.fetcher, {initialData})
    console.log('!!!!!!!!!!!!!!!!', data)

    return (
        <div className="container">
            {/*{data.data.vendor.address}*/}
        </div>
    )
}


export async function getServerSideProps({params}) {
    const {vendorCode} = params
    const vendor = new VendorModel(vendorCode)
    const data = await vendor.fetcher()
    console.log('$$$$$$$$$$$$$$$$$$$$', data)
    return { props: { data } }
}
