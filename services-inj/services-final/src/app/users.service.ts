export class UserServices {
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['chirs', 'Manu'];

    setToActive(id: number){
        this.activeUsers.push(this.inactiveUsers[id]);
    }
    setToInactive(id:number){
        this.inactiveUsers.push(this.activeUsers[id]);
    }
}