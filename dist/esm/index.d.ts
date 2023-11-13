export type DraftModeProps = {
    enabled: boolean;
    draftUrl?: string;
    tag?: string;
    path?: string;
    disableDraftMode?: (pathname?: string) => Promise<void>;
};
export default function DraftMode({ enabled, draftUrl, tag, path, disableDraftMode }: DraftModeProps): import("react/jsx-runtime").JSX.Element | null;
