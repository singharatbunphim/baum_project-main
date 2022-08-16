/**
 * Baum - OpenAPI 2.0
 * Baum API by Pcampus Studio (studio.pcampus.net)
 *
 * OpenAPI spec version: 1.0.0
 * Contact: pcampus.network@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


export interface User { 
    uid?: string;
    fullname?: string;
    email?: string;
    gender?: User.GenderEnum;
    roles?: Array<string>;
    /**
     * address id
     */
    address?: string;
    tel?: string;
    profilePic?: string;
    username?: string;
    birthDate?: Date;
    loggedDate?: Date;
}
export namespace User {
    export type GenderEnum = 'Male' | 'Female' | 'Non-binary' | 'Transgender' | 'Intersex' | 'I prefer not to say';
    export const GenderEnum = {
        Male: 'Male' as GenderEnum,
        Female: 'Female' as GenderEnum,
        NonBinary: 'Non-binary' as GenderEnum,
        Transgender: 'Transgender' as GenderEnum,
        Intersex: 'Intersex' as GenderEnum,
        IPreferNotToSay: 'I prefer not to say' as GenderEnum
    };
}