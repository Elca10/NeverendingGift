// will render activity layout


export default function ActivityPage({ activity }) {
    switch (activity) {
        case "map":
            g = <Map></Map>
        case "message":
            g = <Message></Message>
    }

    return <div>
        {g}
    </div>
}