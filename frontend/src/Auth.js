//Lógica de autenticação de login escola
export const isAuthenticated = () => {
    const schoolId = localStorage.getItem('schoolId');
    const schoolName = localStorage.getItem('schoolName');

    return schoolId && schoolName ? true : false;
};