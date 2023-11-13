'use server';
import { draftMode, cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { revalidateTag as rt, revalidatePath as rp } from 'next/cache';
const cookieStore = cookies();
const dMode = draftMode();
export async function disableDraftMode(pathname) {
    console.log('disableDraftMode', pathname);
    dMode.disable();
    redirect(pathname ?? `/`);
}
export async function revalidateTag(tag) {
    return rt(tag);
}
export async function revalidatePath(path) {
    return rp(path);
}
//# sourceMappingURL=actions.js.map