import agent from './agent.js'

export function friends() {
    return agent.get('/follow');
}

export function follow({ following_id }) {
    return agent.post('/follow', {
        following_id,
    });
}

export function unfollow({ following_id }) {
    return agent.delete('/follow', {
        data: {
            following_id,
        },
    });
}
