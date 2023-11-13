'use server';
import { redirect } from 'next/navigation';
import { revalidateTag as rt, revalidatePath as rp } from 'next/cache';
export async function disableDraftMode(pathname) {
    'use server';
    console.log('disableDraftMode', pathname);
    const { draftMode } = await import('next/headers');
    console.log(draftMode);
    draftMode().disable();
    redirect(pathname ?? `/`);
}
export async function revalidateTag(tag) {
    return rt(tag);
}
export async function revalidatePath(path) {
    return rp(path);
}
//# sourceMappingURL=actions.js.map