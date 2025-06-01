import { SITE_CONFIG } from "@/lib/constants"
export default function Booking(){
    return(
    <a id="booking">
    <iframe src={SITE_CONFIG.acuityBookingSrc} title="Schedule Appointment" width="100%" height="800" frameBorder="0"></iframe><script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script>
    </a>
    )
}