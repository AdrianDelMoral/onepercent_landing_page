import { footerItems } from "../../data/db";
import FooterItem from "././FooterItem";

export default function Footer() {
    return (
        <footer className="grid grid-cols-1 xl:grid-cols-3 mx-auto w-full max-w-xs xl:max-w-6xl space-y-20 xl:space-y-0 pb-24">
            {footerItems.map(item => (
                <FooterItem
                    key={item.id}
                    item={item}
                />)
            )}
        </footer>
    )
}