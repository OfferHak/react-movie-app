class ActorCard{
    constructor(firstName, lastName, birthDate, image, id)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = new Date(birthDate);
        this.image = image;
        this.id = id;
    }

    getAge() {
        let today = new Date();
        let diff = today.getFullYear() - this.birthDate.getFullYear();
        return diff
    }    
}

export default ActorCard;