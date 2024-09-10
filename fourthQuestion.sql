SELECT 
    u.id_user,
    u.company_name,
    p.number AS phone
FROM 
    Users u
JOIN 
    Phone p ON u.id_user = p.id_user
JOIN 
    State s ON u.id_state = s.id_state
WHERE 
    s.state_code = 'SP';
