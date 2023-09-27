import { ImageResponse } from "next/server"

export const runtime = 'edge'

export default function handler() {
    return new ImageResponse(<div>Hello World</div>);
}