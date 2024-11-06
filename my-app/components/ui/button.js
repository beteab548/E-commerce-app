import classes from '@/app/page.module.css'
import Link from 'next/link'
export default function Button({textDisplay,path}){
return <Link href={path}>
<button className={classes.button}>{textDisplay}</button>
</Link>
}