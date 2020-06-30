/* eslint camelcase: "off" */
export interface DataCenter {
    Address: string;
    Collectors: Array<string>;
    Name: string;
    Type: string
}

export interface Organisation {
    Address: string;
    Aws?: (null)[] | null;
    ComponentsMajorVersion: number;
    DataEncryptionKey: string;
    EsCluster: string;
    IpBlacklist?: (null)[] | null;
    Licenses?: (null)[] | null;
    Logo: string;
    Model: string;
    Name: string;
    OrganisationId: string;
    Sites: Array<{
        Address: string;
        DataCenters: Array<DataCenter>;
        Lat: number;
        Lng: number;
        Name: string;
    }>;
    UpdatedAt: string;
    UserList?: (null)[] | null;
    Website: string;
}

export interface OrganisationState{
    organisations: Array<Organisation> | null;
}
