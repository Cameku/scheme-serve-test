// Postcode dataType
export type GetPostCodeApiResponseType = {
    data: PostCodeDataType;
    status: string;
}


export type PostCodeDataType = {
    postcode: string,
    latitude: string,
    longitude: string;
}

export type CrimeDataResponseType = {
    category: string,
    month: string,
    location: Street,
    outcome_status: Status;
}

export type Street = {
    street: streetObject;
}

export type streetObject = {
    name: string;
}

export type Status = {
    category: string;
}